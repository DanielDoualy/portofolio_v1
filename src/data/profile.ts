/**
 * Personal information. Links below come from Daniel's own CV
 * ("Doualy_liens_interactifs.docx"); update them here if they change.
 */
export const profile = {
  firstName: 'Daniel',
  lastName: 'DOUALY',
  initials: 'DD',
  email: 'doualydaniel24@gmail.com',
  github: 'https://github.com/DanielDoualy',
  githubHandle: 'DanielDoualy',
  linkedin: 'https://www.linkedin.com/in/daniel-doualy-14495636b',
  linkedinHandle: 'daniel-doualy',
  location: 'Abidjan, Côte d’Ivoire',
  /**
   * Put the PDF at public/assets/Daniel_Doualy_CV.pdf, then set this to true.
   * While false, the CV buttons are shown as "coming soon" instead of linking
   * to a missing file.
   */
  cvAvailable: true,
  cvPath: `${import.meta.env.BASE_URL}assets/Daniel_Doualy_CV.pdf`,
  cvFileName: 'Daniel_Doualy_CV.pdf',
};
