import BlogCategories from "components/blog/BlogCategories";
import BlogList from "components/blog/BlogList";
import Header from "components/blog/Header";
import FullWidthLayout from "hocs/layout/fullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function Blog({
    get_blog_list,
    blog_list,
    count,
    get_blog_list_page
}) {

    useEffect(()=>{
        get_blog_list()
    },[])

    return (
        <FullWidthLayout>
            <Header/>
            <BlogCategories/>
            <BlogList blog_list={blog_list && blog_list} count={count && count} get_blog_list_page={get_blog_list_page}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list,
    count: state.blog.count
})

export default connect(mapStateToProps, {
    get_blog_list,
    get_blog_list_page
})(Blog)