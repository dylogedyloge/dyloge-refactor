"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BsBookHalf, BsPlusLg, BsX } from "react-icons/bs";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

const ArticlePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);
  const [characters, setCharacters] = useState([
    { name: "", age: "", description: "" },
  ]);

  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      keywords: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <div className="mx-6 relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full ">
          <Card className="pt-6">
            <CardHeader>
              <CardTitle>
                <Heading title="Article" icon={BsBookHalf} />
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  <label>
                    <div>Topic</div>
                  </label>
                  <FormField
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea maxLength={80} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <label>
                    <div>
                      Keywords{" "}
                      <div className="prose-sm text-xs ">
                        Seperate with comma
                      </div>
                    </div>
                  </label>
                  <FormField
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea maxLength={80} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button className="w-full" type="submit" disabled={isLoading}>
                    Generate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
