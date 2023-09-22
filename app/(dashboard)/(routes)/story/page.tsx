"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  BsBookHalf,
  BsPlusLg,
  BsX,
} from "react-icons/bs";
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

const StoryPage = () => {
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
      prompt: "",
      genre: "",
      type: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);

      setPhotos(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <div className="mx-6 relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full ">
          <Card className="pt-6">
            <CardHeader>
              <CardTitle>
                <Heading title="Story" icon={BsBookHalf} />
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Type of Story</AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup
                      defaultValue="short-story"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {typeOptions.map((type) => (
                        <div
                          className="flex items-center space-x-2"
                          key={type.value}
                        >
                          <RadioGroupItem value={type.label} id={type.label} />
                          <Label htmlFor={type.label}>{type.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Genre of Story</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  {characters.map((character, index) => (
                    <div
                      key={index}
                      className=" dark:bg-stone-900  bg-stone-200 mt-6  p-6 rounded-sm relative"
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
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
