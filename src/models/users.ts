import { Schema, model, ObjectId } from "mongoose";

interface Test extends Document {
 id: number;
 userId: string;
 firstName: string;
  otherName?: string;
  surName: string;
 dob: Date;
 address: string;
 stateOfOrgin: string;
 jambRegNumber?: string;
 admissionInformation?: {
  waec: Record<string, any>;
  yearAdmitted: string;
  department: string;
  faculty: string;
  jambScore: number;
 };
 departmentId?: number;
 facultyId?:number;
 email: string;
 phoneNumber: string;
 level?: ObjectId;
 passort: string;
 guardianInformation?: {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
 };
 role: Array<any>;
 employmentInformation: Record<any, any>;
 rank?: ObjectId;
 nationality: string;
 programmme: ObjectId;
 password: string;
 careerInformation?: Record<any, any>;
 isActive?: boolean;
 isDeleted: boolean;
 createdOn: Date;
}

const TestSchema = new Schema<Test>({
  id: {
    type: Number,
    required: true,
    unique:true
  },
  userId: {
    type: String,
    required:true
  },
  firstName: {
    type: String,
    required: true
  },

  otherName: {
    type: String,
    
  },
  dob: {
    type: Date
  },
  address: {
    type: String,

  },
  stateOfOrgin: {
    type: String
  },
  jambRegNumber: {
    type: String,
    required: true,
    unique: true
  },
  admissionInformation: {
    waec: {
      type: Object
    },
    yearAdmitted: {
           type: String
    },
    department: {
      type: String
    },
    faculty: {
      type: String
    },
    jambScore: {
      type: Number
    }
  },
  departmentId: {
    type: Number,
   
  },
  facultyId: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true

  },
  level: {
    type: Schema.Types.ObjectId,
    ref:"level"
  },

  passort: {
    type:String
  },
  guardianInformation: {
    name: {
      type: String
    },
    address: {
      type: String
    },
    phoneNumber: {
      type: String,

    },
    email: {
      type: String
    }
  },
  role: {
    type: Array<any>

  },
  employmentInformation: Record<any, any>;
  rank?: ObjectId;
  nationality: string;
  programmme: ObjectId;
  password: string;
  careerInformation?: Record<any, any>;

 isActive: {
  type: Boolean,
  required: true,
  default: true,
 },
 isDeleted: {
  type: Boolean,
  required: true,
  default: false,
 },
 createdOn: {
  type: Date,
  required: true,
  default: new Date(),
 },
});

export default model<Test>("TestModel", TestSchema);
