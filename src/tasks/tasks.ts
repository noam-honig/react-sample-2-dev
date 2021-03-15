import { BoolColumn, EntityClass, IdEntity, StringColumn } from "@remult/core";

@EntityClass
export class Tasks extends IdEntity {
    name = new StringColumn();
    completed = new BoolColumn();
    constructor() {
        super({
            name: 'tasks',
            allowApiCRUD: true
        })
    }
}