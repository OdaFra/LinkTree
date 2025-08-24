import colors from 'colors';
import server from "./routers/server";

// Port
const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(colors.blue.bold('Server is running on port'), PORT);
});