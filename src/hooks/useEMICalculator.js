const useEMICalculator=()=>{
    const calculateEMI=(principal,rate,term)=>{
        const monthlyRate=rate/12/100;
        const months=term*12;
        const emi=(principal*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);
        return emi.toFixed(2);
    };
 return {calculateEMI};
};
export default useEMICalculator;