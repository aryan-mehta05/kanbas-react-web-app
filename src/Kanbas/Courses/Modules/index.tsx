import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import {
  addModule,
  setModules,
  editModule,
  updateModule,
  deleteModule
} from "./reducer";

import * as modulesClient from "./client";
import * as coursesClient from "../client";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

const Modules = () => {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const fetchModules = useCallback(async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  }, [dispatch, cid]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  
  return (
    <div>
      {currentUser.role === "FACULTY" && (
        <>
          <ModulesControls
            addModule={createModuleForCourse}
            moduleName={moduleName}
            setModuleName={setModuleName}
          /><br /><br /><br /><br />
        </>
      )}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any, idx: number) => (
            <li
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
              key={module._id}
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <span className="fw-bold">Module {idx + 1}: </span>{!module.editing && module.name}
                {module.editing && (
                  <input className="form-control w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  editModule={(moduleId) => {dispatch(editModule(moduleId))}}
                  deleteModule={(moduleId) => {removeModule(moduleId)}}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      className="wd-lesson list-group-item p-3 ps-1"
                      key={lesson._id}
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Modules;
