import { z } from "zod";

const schema = z.object({
  name: z.string().min(5),
  price: z.number().gt(0),
});

export default schema;
