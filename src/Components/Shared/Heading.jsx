import PropTypes from 'prop-types'; 

const Heading = ({title,subTitle}) => {
    return (
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
            <p className="text-xs text-gray-400">{subTitle}</p>
        </div>
    );
};

export default Heading;
Heading.propTypes ={
    title: PropTypes.object.isRequired,
    subTitle: PropTypes.object.isRequired
}