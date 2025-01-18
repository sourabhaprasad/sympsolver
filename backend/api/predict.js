export default async function handler(req, res) {
  if (req.method === "POST") {
    const { symptoms } = req.body;

    // Process symptoms and make predictions here
    console.log("Received symptoms:", symptoms);

    res.status(200).json({ message: "Prediction processed successfully!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
