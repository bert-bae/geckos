export const getLink = {
  /**
   * @param {string} id task or epic ID
   * @returns {string} built router link string
   */
  taskDetails: (id: string) => 'string',
  /**
   * @param {string} id root task or epic ID
   * @returns {string} built router link string
   */
  taskList: (id: string) => 'string',
  /**
   * @returns {string} built router link sting
   */
  login: () => 'string'
};
