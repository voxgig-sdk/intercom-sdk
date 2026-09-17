import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Note, NoteLoadMatch, NoteListMatch, NoteCreateData } from '../IntercomTypes';
declare class NoteEntity extends IntercomEntityBase<Note> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: NoteEntity): NoteEntity;
    load(this: any, reqmatch?: NoteLoadMatch, ctrl?: Control): Promise<NoteEntity>;
    list(this: any, reqmatch?: NoteListMatch, ctrl?: Control): Promise<NoteEntity[]>;
    create(this: any, reqdata?: NoteCreateData, ctrl?: Control): Promise<NoteEntity>;
}
export { NoteEntity };
