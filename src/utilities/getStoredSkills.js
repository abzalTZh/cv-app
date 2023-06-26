export const getStoredSkills = () => {
    const storedSkills = localStorage.getItem('skills');
    return storedSkills ? JSON.parse(storedSkills) : null;
};