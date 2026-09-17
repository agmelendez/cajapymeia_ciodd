// Módulo para almacenamiento y progreso del usuario
export const StorageManager = {
  saveProgress(weekId, completed = true) {
    const progress = this.getProgress();
    progress[weekId] = completed;
    localStorage.setItem('caja_pyme_progress', JSON.stringify(progress));
  },

  getProgress() {
    const data = localStorage.getItem('caja_pyme_progress');
    return data ? JSON.parse(data) : {};
  },

  saveAssessmentResult(result) {
    localStorage.setItem('caja_pyme_assessment', JSON.stringify(result));
  },

  getAssessmentResult() {
    const data = localStorage.getItem('caja_pyme_assessment');
    return data ? JSON.parse(data) : null;
  }
};
