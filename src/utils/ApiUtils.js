const api = require("./api")

module.exports.getAcademics = async () => {
    const academics = await api.get("academic")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return academics;
}

module.exports.getSupervisor = async () => {
    const supervisors = await api.get("supervisor")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return supervisors;
}

module.exports.getAllStudents = async () => {
    const students = await api.get("students")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return students;
}

module.exports.getAllProjects = async () => {
    const projects = await api.get("projects")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return projects;
}

module.exports.getAllocations = async () => {
    const projects = await api.get("supervisor/assignment")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return projects;
}

module.exports.getPreferences = async () => {
    const preferences = await api.get("projectPreference")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return preferences;
}

module.exports.getSelfProposed = async () => {
    const selfProposed = await api.get("selfProjectPreference")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return selfProposed;
}

module.exports.submitProjects = async (ProjectAlloc) => {
    const res = await api.post("supervisors/allocation", ProjectAlloc)
}

module.exports.submitPresentations = async (Presentation) => {
    const resPres = await api.post("presentation", Presentation)
}

module.exports.submitSupervisors = async (Supervisors) => {
    const resProj = await api.post("supervisor", Supervisors)
}