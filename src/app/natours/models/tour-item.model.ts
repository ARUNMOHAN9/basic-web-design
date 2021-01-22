class TourItemModel {
    title = '';
    benificts: string[] = [];
    price = 0;
    colorBack = '';
    colorFront = '';
    colorHead = '';

    constructor(obj: any) {
        this.title = obj?.title || '';
        this.benificts = obj?.benificts || [];
        this.price = obj?.price || 0;
        this.colorBack = obj?.colorBack || '';
        this.colorFront = obj?.colorFront || '';
        this.colorHead = obj?.colorHead || '';
    }
}

export default TourItemModel;
