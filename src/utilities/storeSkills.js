import { getStoredSkills } from "./getStoredSkills";

export const storeSkills = (skills) => {
    const stored = getStoredSkills();
    const mergedSkills = stored ? [...skills, ...stored] : skills;
    localStorage.setItem('skills', JSON.stringify(mergedSkills));
};