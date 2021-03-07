import { EntityClass, IdEntity, StringColumn } from "@remult/core";

@EntityClass
export class Tasks extends IdEntity {
    name = new StringColumn();
    constructor() {
        super({
            name: 'tasks',
            allowApiCRUD: true
        })
    }
}