export class WorkPlace {
    public iconPath!: string;
    public name!: string;        
    public startDate!: string;        
    public endDate!: string;          
    public jobDescription!: string;
    public tehnology!: string[];
    public location!: string ;
    public role!: string;
    constructor() {
        this.iconPath = "";
        this.name = "";
        this.startDate = "";
        this.endDate = "";
        this.jobDescription = "";
        this.tehnology = [];
        this.location = "";
        this.role = "";
    }      
}