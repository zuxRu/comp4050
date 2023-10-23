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

module.exports.submitProjects = async (ProjectAlloc) => {
    const res = await api.post("supervisors/assignment", ProjectAlloc)
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}

module.exports.submitMarkerData = async (ProjectAlloc) => {
    const res = await api.post("supervisors/allocation", ProjectAlloc)
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}

module.exports.submitPresentations = async (ProjectAlloc, Presentation) => {
    const resProj = await api.post("supervisors/allocation", ProjectAlloc)
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
    const resPres = await api.post("presentation", Presentation)
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}