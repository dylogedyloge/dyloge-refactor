"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { NextPage } from "next";

const schema = z.object({
  type: z.enum(["short", "long"]),
  genre: z.array(z.enum(["A", "B", "C"])),
  character: z.object({
    name: z.string(),
    age: z.number(),
    description: z.string(),
  }),
});

type FormData = z.infer<typeof schema>;

const defaultValues: FormData = {
  type: "short",
  genre: [],
  character: {
    name: "",
    age: 0,
    description: "",
  },
};

const Form: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Type:</label>
        <div>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <div>
                <input type="radio" {...field} value="short" />
                <label htmlFor="short">Short</label>
                <input type="radio" {...field} value="long" />
                <label htmlFor="long">Long</label>
              </div>
            )}
          />
        </div>
      </div>
      <div>
        <label>Genre:</label>
        <div>
          {["A", "B", "C"].map((option) => (
            <div key={option}>
              <Controller
                name="genre"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="checkbox"
                      {...field}
                      value={option as "A" | "B" | "C"}
                      checked={field.value.includes(option as "A" | "B" | "C")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([
                            ...field.value,
                            option as "A" | "B" | "C",
                          ]);
                        } else {
                          field.onChange(
                            field.value.filter((v) => v !== option)
                          );
                        }
                      }}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <label>Character:</label>
        <div>
          <Controller
            name="character.name"
            control={control}
            render={({ field }) => (
              <div>
                <input type="text" {...field} placeholder="Name" />
              </div>
            )}
          />
          <Controller
            name="character.age"
            control={control}
            render={({ field }) => (
              <div>
                <input type="number" {...field} placeholder="Age" />
              </div>
            )}
          />
          <Controller
            name="character.description"
            control={control}
            render={({ field }) => (
              <div>
                <textarea {...field} placeholder="Description" />
              </div>
            )}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
