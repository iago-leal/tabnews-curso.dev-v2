function status(request, response) {
  response.status(200).json({ chave: "iago é top" });
}

export default status;
