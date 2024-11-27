import { model } from "mongoose";

export const findModulesForCourse = (courseId) => model.find({ modules: courseId });

export const createModule = (module) => {
    delete module._id
    return model.create(module);
}

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

export const updateModule = (moduleId, moduleUpdates) => model.updateOne({ _id: moduleId }, { $set: moduleUpdates });
  
   
  

