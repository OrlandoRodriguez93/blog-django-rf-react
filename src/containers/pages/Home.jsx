import FullWidthLayout from "hocs/layout/fullWidthLayout";
import { connect } from "react-redux";

function Home({
}) {

    return (
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps, {
})(Home)