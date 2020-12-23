export default () => {
  const port = parseInt(process.env.PORT, 10) || 3000
  console.log(`App started on port ${port}`);
  
  return {port}
};