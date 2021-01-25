export const getLink = {
  /**
   * @param {string} id task or epic ID
   * @returns {string} built router link string
   */
  taskDetails: (id: string) => `/task-details/${id}`,
  /**
   * @param {string} id root task or epic ID
   * @returns {string} built router link string
   */
  taskList: (id: string) => `/task-list/${id}`,
  /**
   * @returns {string} built router link sting
   */
  login: () => '/login'
};
