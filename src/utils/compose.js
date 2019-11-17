const compose = (...funcArr) => (componentToWrap) => {
    return funcArr.reduceRight((wrapped, f) => f(wrapped), componentToWrap);
};

export default compose;