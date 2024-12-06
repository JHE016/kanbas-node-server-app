import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        default: "New Assignment",
    },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    modules: { 
        type: String,
        default: "Multiple Modules" 
    }, 
    availableUntil: { 
        type: Date,
    },
    notAvailableUntil: { 
        type: Date,
    },
    due: { 
        type: Date,
    },
    score: { 
        type: String,
    },
    description: { 
        type: String,
        default: "Assignment Descritption"
    },
    textEntry: { 
        type: Boolean, 
        default: false 
    },
    websiteURL: { 
        type: Boolean, 
        default: false 
    },
    mediaRecordings: { 
        type: Boolean, 
        default: false 
    },
    studentAnnotation: { 
        type: Boolean, 
        default: false 
    },
    fileUploads: { 
        type: Boolean, 
        default: false 
    }
}, {
    collection: "assignments",
    timestamps: true
});

export default schema;