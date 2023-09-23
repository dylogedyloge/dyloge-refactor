"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BsFillCameraReelsFill, BsPlusLg, BsX, BsXLg } from "react-icons/bs";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useProModal } from "@/hooks/use-pro-modal";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { genreOptions, formSchema, typeOptions } from "./constants";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ScreenPlayPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);
  const [characters, setCharacters] = useState([
    { name: "", age: "", description: "" },
  ]);

  const handleCharacterChange = (index: number, field: any, value: any) => {
    const updatedCharacters = [...characters];
    updatedCharacters[index] = { ...updatedCharacters[index], [field]: value };
    setCharacters(updatedCharacters);
  };

  const handleAddCharacter = () => {
    setCharacters([...characters, { name: "", age: "", description: "" }]);
  };

  const handleRemoveCharacter = (index: number) => {
    const updatedCharacters = [...characters];
    updatedCharacters.splice(index, 1);
    setCharacters(updatedCharacters);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      genre: [],
      characters: [{ name: "", age: "", description: "" }],
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (form.formState.isValid) {
      console.log(values);
    } else {
      console.log("Form is not valid. Please correct errors.");
    }
  };

  return (
    <div className="m-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-left">
            <Heading
              title="Screenplay"
              description="Easily craft and download cinematic masterpieces with AI scriptwriting!"
              icon={BsFillCameraReelsFill}
            />
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className=" py-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Accordion type="single" collapsible className="col-span-2">
                <AccordionItem value="type">
                  <AccordionTrigger>Type of Screenplay</AccordionTrigger>
                  <AccordionContent>
                    <FormField
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup defaultValue="short-screenplay">
                              {typeOptions.map((type) => (
                                <div
                                  className="flex items-center space-x-2"
                                  key={type.value}
                                >
                                  <RadioGroupItem
                                    value={type.label}
                                    id={type.label}
                                  />
                                  <Label htmlFor={type.label}>
                                    {type.label}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="col-span-2">
                <AccordionItem value="genre">
                  <AccordionTrigger>Type of Screenplay</AccordionTrigger>
                  <AccordionContent>
                    <FormField
                      name="genre"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              {genreOptions.map((genre) => (
                                <div
                                  className="items-top flex space-x-2"
                                  key={genre.value}
                                >
                                  <Checkbox id={genre.value} />
                                  <div className="grid gap-1.5 leading-none">
                                    <label
                                      htmlFor={genre.value}
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {genre.label}
                                    </label>
                                  </div>
                                </div>
                              ))}
                            </span>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {characters.map((character, index) => (
                <div
                  key={index}
                  className=" dark:bg-neutral-900  bg-neutral-200 mt-6  p-6 rounded-sm relative col-span-2"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveCharacter(index)}
                    className={` absolute top-4 right-6  ${
                      index === 0 ? "hidden" : ""
                    }`}
                  >
                    <BsX />
                  </Button>
                  <p className="text-md  font-semibold mt-6 ">
                    Character {index + 1}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 ">
                      <Label aria-labelledby={`name-${index}`}>Name</Label>
                      <FormField
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              type="text"
                              placeholder=""
                              onChange={(e) =>
                                handleCharacterChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                              value={character.name}
                              id={`name-${index}`}
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-1">
                      <Label aria-labelledby={`age-${index}`}>Age</Label>
                      <FormField
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              type="text"
                              placeholder=""
                              onChange={(e) =>
                                handleCharacterChange(
                                  index,
                                  "age",
                                  e.target.value
                                )
                              }
                              value={character.age}
                              id={`age-${index}`}
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label aria-labelledby="characterDescription">
                        Character description
                      </Label>
                      <FormField
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <Textarea
                              id={`description-${index}`}
                              placeholder="Describe the character and its backstory..."
                              value={character.description}
                              onChange={(e) =>
                                handleCharacterChange(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2  grid place-items-center">
                      <Button onClick={handleAddCharacter}>
                        <BsPlusLg />
                        Add another character
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                className="my-4 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenPlayPage;
