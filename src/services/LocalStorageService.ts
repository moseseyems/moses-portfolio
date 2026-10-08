export interface StoredEntity {
    id: string;
}

export class LocalStorageService<T extends StoredEntity> {
    private readonly storageKey: string;
    private readonly initialData: T[];

    constructor(
        storageKey: string,
        initialData: T[] = []
    ) {
        this.storageKey = storageKey;
        this.initialData = initialData;
    }

    initialize(): void {
        if (localStorage.getItem(this.storageKey) !== null) {
            return;
        }

        this.write(this.initialData);
    }

    getAll(): T[] {
        const storedData = localStorage.getItem(this.storageKey);

        if (!storedData) {
            return [];
        }

        try {
            const parsedData: unknown = JSON.parse(storedData);

            return Array.isArray(parsedData)
                ? parsedData as T[]
                : [];
        } catch {
            return [];
        }
    }

    getById(id: string): T | undefined {
        return this.getAll().find(
            item => item.id === id
        );
    }

    create(item: T): T {
        const items = this.getAll();

        if (
            items.some(
                existingItem => existingItem.id === item.id
            )
        ) {
            throw new Error(
                `An item with the id "${item.id}" already exists.`
            );
        }

        this.write([...items, item]);

        return item;
    }

    update(
        id: string,
        updates: Partial<Omit<T, 'id'>>
    ): T | undefined {
        const items = this.getAll();

        const itemIndex = items.findIndex(
            item => item.id === id
        );

        if (itemIndex === -1) {
            return undefined;
        }

        const updatedItem: T = {
            ...items[itemIndex],
            ...updates,
            id,
        };

        items[itemIndex] = updatedItem;

        this.write(items);

        return updatedItem;
    }

    delete(id: string): boolean {
        const items = this.getAll();

        const remainingItems = items.filter(
            item => item.id !== id
        );

        if (
            remainingItems.length === items.length
        ) {
            return false;
        }

        this.write(remainingItems);

        return true;
    }

    replaceAll(items: T[]): void {
        this.write(items);
    }

    private write(items: T[]): void {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(items)
        );
    }
}
