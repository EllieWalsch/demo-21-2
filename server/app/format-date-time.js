function formatCurrentDateTime() {
  const current = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return current.toLocaleDateString("en-US", options);
}

export default formatCurrentDateTime;
