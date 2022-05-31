import React from "react";
import blogImage from "../../Assets/Images/component-tree.png";
import "./Blog.css";

const Blog = () => {
    return (
        <>
            <div className="blog container mx-auto h-[75vh]">
                <h3 className="text-3xl font-bold mb-5">React Context API কি?</h3>
                <p>Basically React Components এবং States এর সাথে কাজ করে। react application এর মধ্যে parent components এবং child components থাকে। এই parent এবং child componets মিলে তৈরি করে একটি componet tree.</p>
                <img className="w-10/12 mx-auto mb-5" src={blogImage} alt="" />
                <p>আমরা খুব সহজেই top থেকে bottom এ componet state পাঠাতে পারি props এর মাধ্যমে। উপরের উদাহরণ সরূপ component1 খুব সহজেই একটা state কে নিচের সমস্ত components এর কাছে পাঠাতে পারে। </p>
                <p>একইভাবে, component3 খুব সহজেই props এর মাধ্যমে একটি state component6 এবং component7 এর কাছে পাঠাতে পারে। </p>
                <p>
                    কিন্তু কি করবো যদি component6 থেকে একটি state component4 কে পাঠানোর প্রয়োজন হয়। এক্ষেত্রে আমাদের state কে component6 থেকে component1 এ তুলতে হবে এবং state কে props এর মাধ্যমে component4 এ pass করতে হবে। আবার যদি আমরা চাই যে
                    component6 থেকে component7 এ state পাঠাতে হবে। এটা খুবই বিরক্তিকর এবং সময় সাপেক্ষ হবে আর এই প্রক্রিয়াকে বলা হয় Prop Drilling.{" "}
                </p>
                <p>
                    Context API এসে Prop Drilling এর এই সময় সাপেক্ষ প্রক্রিয়া কে অনেক সহজ করেছে। Context API components এর ভিতরে Provider এবং Consumer এর মাধ্যমে ডাটা পাঠাতে পারে props এর মাধ্যম ছাড়াই। Context API এর মাধ্যমে যেকোনো component data
                    access করতে পারে কোনরকম ঝামেলা ছাড়াই। Provider এখানের ছাদের মত যেখানে তার নিচে থাকা সকল components consume করতে পারে।{" "}
                </p>
            </div>
            <div className="blog container mx-auto">
                <h3 className="text-3xl font-bold mb-5">HTML Semantic Element কি?</h3>
                <p>
                    Semantic HTML Element মানুষ এবং মেশিনের পাঠযোগ্য উপায়ে স্পষ্টভাবে তাদের অর্থ বর্ণনা করে। যে সকল Elements এর নাম দেখলে বুঝা যায় যে সে কি নির্দেশ করছে বা তার use of pourpos কি। যদি কিছু non-semantic এলিমেন্ট দেখি যেমন {"<div>"} অথবা{" "}
                    {"<span>"} তাহলে বুঝা যাবে না এই element গুলো কি নির্দেশ করছে কিন্তু যদি {"<form>, <header>, <article>"} এই element গুলা দেখি তাহলে সহজেই বুঝা যাচ্ছে যে এরা কি নির্দেশ করছে এবং এদের use of pourpos কি।
                </p>
                <p>পুরাতন html ভার্সনে বেশিরভাগই non-semantic element ব্যবহার হত। html5 এর element গুলার মুল ফোকাস ছিলো semantic element এর উপর। কিছু উল্লেখযোগ্য html5 semantic elements:</p>
                <ul className="list-inside list-disc mb-3">
                    <li>article</li>
                    <li>detail</li>
                    <li>figure</li>
                    <li>footer</li>
                    <li>header</li>
                    <li>main</li>
                    <li>mark</li>
                    <li>section</li>
                    <li>summary</li>
                </ul>
                <p>semantic element বিশেষকরে disablilities মানুষদের জন্য accicibility বাড়িয়ে দেই। এছাড়াও SOE optimization এর ক্ষেত্রে semantic elements বিশেষ ভুমিকা পালন করে।</p>
            </div>
        </>
    );
};

export default Blog;
