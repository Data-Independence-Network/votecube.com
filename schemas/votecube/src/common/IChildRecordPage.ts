export interface IChildRecordPage<PageType, ParentRecord, ChildRecord = ParentRecord> {
    type: PageType;
    parent: ParentRecord;
    children: ChildRecord[];
    branchPage?: IChildRecordPage<PageType, ParentRecord, ChildRecord>;
    childPages?: IChildRecordPage<PageType, ParentRecord, ChildRecord>[];
}
