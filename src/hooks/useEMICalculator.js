const useEMICalculator=()=>{
    const calculateEMI=(principal,rate,term)=>{
      
        const monthlyRate=rate/12/100;
        const months=term*12;
        const emi=(principal*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);
        let balance=principal;
        const schedule=[];

        for(let i=1;i<=months;i++){
            const interest=balance*monthlyRate;
            const principalPaid=emi-interest;
            balance -=principalPaid;

            schedule.push({
                month:i,
                principal:principalPaid.toFixed(2),
                interest:interest.toFixed(2),
                balance:balance>0?balance.toFixed(2):'0.00',


            });
        }
        return {
            emi:emi.toFixed(2),
            schedule,
        };
       
    };

 return {calculateEMI};
};
export default useEMICalculator;