import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../../../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-coffee hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (other blogs except current one)
  const relatedPosts = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <p className="text-gray-400 text-xs tracking-widest uppercase">
            BLOG &gt; {blog.category.toUpperCase()}
          </p>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            {blog.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Author Info & Date */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-900 font-medium">Written by</p>
            <p className="text-gray-700">{blog.author.name}</p>
            <p className="text-gray-400 text-sm mt-1">{blog.date}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Sunt quos atque et libero.
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Esse aspernatur sunt quam rerum et occaecati quis. Aut qui minima incidunt 
            quis sunt amet laborum et id accusamus unde quo iure perspiciatis nihil.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Aliquam tempora unde rerum.
          </h3>

          {/* Quote Section */}
          <blockquote className="bg-gray-50 border-l-4 border-gray-300 p-6 my-8 italic text-gray-700">
            "Voluptate dignissimos omns et. Ut quo non. 
            Necessitatibus animi voluptatibus."
          </blockquote>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas 
            ut id qui. Hic nesciunt dolorum iure aut nihil nobis dolore. Laborum est animi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Molestiae harum commodi itaque aspariatur qui. Plertat ut quo et 
            architecto molestiae magni est inventore. Autem quasi vel beatae commodi 
            voluptas voluptate faciet.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Nulla veritatis aut velit alias omnis distinctio.
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Saepe accusantium voluptas nostrum. Aliquam nostrum quidautem dolorabus 
            aliquam ipsam. Sunt est quos distincta impedit nam qui error consequatur 
            modi. Consequatur in qui laudarium provident. Ex eum debitis sed voluptas 
            est molestiae qui ipsa est. Laborum sint soluta est illaque similique nemo 
            deserunt suscipit.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Aut cum accusamus.
          </h3>

          {/* Quote Section 2 */}
          <blockquote className="bg-gray-50 p-6 my-8 text-center italic text-gray-700">
            "Autem officia qui impedit consequuntur cum. Rerum 
            repudiandae id. Qui facilis expedita aliquam delectus 
            repellat."
          </blockquote>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ut maxime voluptates dolorem tempore quasi sed excepturi quod. Ex aut qui 
            harum molestiae. Qui minus fugiat. Nihil vel aspernatur commodi dolore 
            rerum praesentium distincta quis. Eius error asperiore reiciendis dolorum 
            dolent natoque quis eum.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Soluta sunt beatae et. Neque reprehenderit facere aspernatur nemo voluptas 
            verum itaque officia. Quam est totam qui dolore voluptatem numquam.
          </p>

          {/* Article Image */}
          <div className="my-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F19d093ec8b9647ce8eeb76a320f8dc53%2F2e101bf63e6a4f339b80b454719017cb?format=webp&width=800"
              alt="Coffee and dessert"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>

          <h3 className="text-xl font-medium text-gray-900 mb-4">
            At beatae nobis quia facilis.
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Consequatur modi nulla facilis enim minima qua expedita sequi perspiciatis 
            ductibus quia laboriosam. Perferentia vel nec nihil porro tempore illo. Sit 
            provident nostrum facilistat consectetor amet nobis et enim aut iure quaerat 
            consequatur fugiat et noi.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Praesentium ullam facere.
          </h3>

          {/* Final Quote */}
          <blockquote className="bg-gray-50 p-6 my-8 text-center italic text-gray-700">
            "Qui optio ut sunt reprehenderit aut neque 
            reprehenderit. Repudiandae omnis ipsum nulla ut 
            possimus minima autem repellendus nobis. Fugiat 
            porro aspariores fugiat et in placeat itaque."
          </blockquote>

          <p className="text-gray-700 leading-relaxed mb-6">
            Minima qua recursandae debitis nostram. Deserunt facilis voluptatem dolore. 
            Consectetur suscepit nisal et ipsum et sit. Qui laudantium quo libane. Sit 
            consequatur fugiat expedita laboriosam expedita animi adipiaci. Quia sit aut 
            voluptate cum est vel voluptatem.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Quasi quidem quisam illum. Nostrum aut porro necessitatibus saepe aut 
            labore magnam provident sed. Molestiae placeat voluptas et nostrum maiores 
            omnis et et et pariatur quid unde reprehendem fugiat voluptas vel. Esse vere a.
          </p>
        </div>

        {/* Further Reading */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              Further Reading
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {relatedPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group"
              >
                <div className="mb-4">
                  <img
                    src={index === 0 ? "https://cdn.builder.io/api/v1/image/assets%2F19d093ec8b9647ce8eeb76a320f8dc53%2F1fea40e5c653435887e0526985172bea?format=webp&width=800" : "https://cdn.builder.io/api/v1/image/assets%2F19d093ec8b9647ce8eeb76a320f8dc53%2F221a6d55ce0c4760869f611e18c0c591?format=webp&width=800"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-coffee transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-gray-400 text-xs tracking-widest uppercase">
                  {post.date}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
