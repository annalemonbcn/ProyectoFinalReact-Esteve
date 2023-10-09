export const convertTimestamp = (timestampObj) => {
  // Crea un objeto de fecha a partir de la marca de tiempo
  const date = new Date(
    timestampObj.seconds * 1000 + timestampObj.nanoseconds / 1e6
  );

  // Obtiene las partes de la fecha y hora
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Los meses en JavaScript se indexan desde 0
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Formatea la fecha y hora como una cadena
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedDate;
};