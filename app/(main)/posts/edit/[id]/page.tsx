"use client";
import React from "react";
import { DatePicker, Form, Input } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
// import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import posts from "@/data/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const formSchema = z.object({
//   title: z.string().min(1, { message: "标题不能为空" }),
//   body: z.string().min(1, { message: "内容不能为空" }),
//   author: z.string().min(1, { message: "作者不能为空" }),
//   date: z.date(),
// });

// type TFormSchema = z.infer<typeof formSchema>;

type TFormSchema = {
  title: string;
  body: string;
  author: string;
  date: Date;
};

type PostEditPageProps = {
  params: {
    id: string;
  };
};

const config = {
  rules: [{ type: "object" as const, required: true, message: "请选择日期" }],
};

const PostEditPage = ({ params }: PostEditPageProps) => {
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("YYYY-MM-DD"),
    };
    toast({
      title: "提交成功",
      description: `${JSON.stringify(values)}`,
    });
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <BackButton text="返回" link="/posts" />
      <Card className="p-4 max-w-3xl bg-background">
        <CardHeader>
          <CardTitle>修改帖子</CardTitle>
        </CardHeader>
        <CardContent>
          <Form
            name="time_related_controls"
            layout="vertical"
            onFinish={onFinish}
            // style={{ maxWidth: 600 }}
            initialValues={{
              ...post,
              date: dayjs(post?.date, "YYYY-MM-DD"),
            }}
          >
            <FormItem<TFormSchema>
              label="标题"
              name="title"
              style={{ color: "white" }}
              rules={[{ required: true, message: "请输入标题" }]}
            >
              <Input />
            </FormItem>
            <FormItem<TFormSchema>
              label="内容"
              name="body"
              rules={[{ required: true, message: "请输入内容" }]}
            >
              <TextArea />
            </FormItem>
            <FormItem<TFormSchema>
              label="作者"
              name="author"
              rules={[{ required: true, message: "请输入作者" }]}
            >
              <Input />
            </FormItem>
            <FormItem name="date" label="日期" {...config}>
              <DatePicker
                value={dayjs(post?.date, "YYYY-MM-DD")}
                className="w-full"
              />
            </FormItem>

            <Button type="submit" className={"w-full mt-4"}>
              提交
            </Button>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default PostEditPage;
