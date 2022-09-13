import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import FullWidthLayout from "hocs/layout/fullWidthLayout";
import { useEffect } from "react";
import { search_blog, get_blog_list_page } from "redux/actions/blog";
import BlogListSearch from "components/blog/BlogListSearch";

function Search({
    search_blog,
    blog_list,
    count,
    get_blog_list_page
}) {

    const params = useParams()
    const term = params.term

    useEffect(()=>{
        search_blog(term)
    },[])

    return (
        <FullWidthLayout>
            <BlogListSearch blog_list={blog_list && blog_list} count={count && count} get_blog_list_page={get_blog_list_page} />
        </FullWidthLayout>
    )
}

const mapStateToProps =state=>({
    blog_list: state.blog.filtered_posts,
    count: state.blog.count
})

export default connect(mapStateToProps, {
    search_blog,
    get_blog_list_page
})(Search)