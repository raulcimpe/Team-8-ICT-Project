import React from "react";
import "./blog.css";
import Blog1 from "../../../assets/blog1.jpg";
import Blog2 from "../../../assets/blog2.jpg";
import Blog3 from "../../../assets/blog3.jpg";

const blogData = [
  {
    image: Blog1,
    title: "Collaboration for Success",
    date: "18 Sep 2021",
    content:
      '"Collaboration for Success" Solutionise is revolutionizing how students and businesses collaborate. The recent launch showcased how diverse disciplines—law, IT, business, and marketing—can unite to provide tangible, impactful solutions for local businesses. This initiative bridges academic theory and practical application, fostering innovation in Croydon.',
  },
  {
    image: Blog2,
    title: "Empowering Future Legal Professionals",
    date: "18 Sep 2022",
    content:
      "Law students at LSBU, like Oliver Trent Luton, highlight the invaluable experiences Solutionise provides. From honing commercial law skills to supporting local businesses with compliance, Solutionise prepares students to enter the workforce while contributing to community growth.",
  },
  {
    image: Blog3,
    title: "Empowering Future Legal Professionals",
    date: "18 Sep 2018",
    content:
      "Law students at LSBU, like Oliver Trent Luton, highlight the invaluable experiences Solutionise provides. From honing commercial law skills to supporting local businesses with compliance, Solutionise prepares students to enter the workforce while contributing to community growth.",
  },
];

const Blog = () => {
  return (
    <div className="blog_page">
      <h2>Blog and News</h2>
      <div className="blog_container">
        {blogData.map((blog, index) => (
          <div className="blog_card" key={index}>
            <div className="blog_image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <h3>{blog.title}</h3>
            <p className="date">{blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
