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

module.exports.submitProjects = async (project) => {
    await api.post("supervisor/allocation", project)
}

module.exports.submitPresentations = async (presentation) => {
    await api.post("presentation", presentation)
}

module.exports.submitSupervisors = async (supervisor) => {
    await api.post("supervisor", supervisor)
}