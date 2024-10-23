import BgImg from '../assets/Cycle Page.png';

export const MoreDetails = () => {
  return (
    <div className='h-full w-full relative'>
      {/* Background Image */}
      <img src={BgImg} className='w-[1900px] h-[1300px] object-cover absolute top-0 left-0' alt="Background"/>

      {/* Content Overlay */}
      <div className="relative z-10 p-10 bg-white bg-opacity-90 max-w-5xl mx-auto rounded-lg shadow-lg break-words">
        {/* Menstrual Phase */}
        <h2 className="text-3xl font-bold mb-4">Menstrual Phase</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><a href="https://www.aafp.org/pubs/afp/issues/2009/0715/p157.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.aafp.org/pubs/afp/issues/2009/0715/p157.html</a></li>
          <li><a href="https://www.researchgate.net/publication/264349624_The_Effect_of_Fennel_on_Pain_Quality_Symptoms_and_Menstrual_Duration_in_Primary_Dysmenorrhea" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.researchgate.net/publication/264349624_The_Effect_of_Fennel_on_Pain_Quality_Symptoms_and_Menstrual_Duration_in_Primary_Dysmenorrhea</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/28356030/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pubmed.ncbi.nlm.nih.gov/28356030/</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0301211506006737" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.sciencedirect.com/science/article/abs/pii/S0301211506006737</a></li>
          <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6856484/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6856484/</a></li>
          <li><a href="https://www.researchgate.net/publication/381844398_Serum_Vitamin_D_Level_and_Insulin_Resistance_in_Obese_Adolescent_with_Polycystic_Ovary_Syndrome_PCOS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.researchgate.net/publication/381844398_Serum_Vitamin_D_Level_and_Insulin_Resistance_in_Obese_Adolescent_with_Polycystic_Ovary_Syndrome_PCOS</a></li>
          <li><a href="https://ijshr.com/IJSHR_Vol.3_Issue.1_Jan2018/IJSHR0014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ijshr.com/IJSHR_Vol.3_Issue.1_Jan2018/IJSHR0014.pdf</a></li>
          <li><a href="https://www.researchgate.net/publication/374129410_The_effect_of_giving_combination_boiled_chicken_egg_and_red_dragon_fruit_Hylocereus_polyrhizus_to_increase_hemoglobin_levels_in_women_during_menstruation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.researchgate.net/publication/374129410_The_effect_of_giving_combination_boiled_chicken_egg_and_red_dragon_fruit_Hylocereus_polyrhizus_to_increase_hemoglobin_levels_in_women_during_menstruation</a></li>
        </ol>

        {/* Follicular Phase */}
        <h2 className="text-3xl font-bold mt-10 mb-4">Follicular Phase</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/35471634/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pubmed.ncbi.nlm.nih.gov/35471634/</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S0002916523232761" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.sciencedirect.com/science/article/pii/S0002916523232761</a></li>
          <li><a href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.732255/full" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.732255/full</a></li>
        </ol>

        {/* Ovulatory Phase */}
        <h2 className="text-3xl font-bold mt-10 mb-4">Ovulatory Phase</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/37593349/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pubmed.ncbi.nlm.nih.gov/37593349/</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S0015028218304291" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.sciencedirect.com/science/article/pii/S0015028218304291</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S2405844024053556#:~:text=Omega-3%20fatty%20acids%20support,%5D%2C%20%5B8%5D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.sciencedirect.com/science/article/pii/S2405844024053556#:~:text=Omega-3%20fatty%20acids%20support,%5D%2C%20%5B8%5D</a></li>
          <li><a href="https://www.mdpi.com/2072-6643/14/8/1556" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.mdpi.com/2072-6643/14/8/1556</a></li>
        </ol>

        {/* Luteal Phase */}
        <h2 className="text-3xl font-bold mt-10 mb-4">Luteal Phase</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><a href="https://www.fertstert.org/article/S0015-0282(13)03060-4/fulltext" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.fertstert.org/article/S0015-0282(13)03060-4/fulltext</a></li>
        </ol>
      </div>
    </div>
  );
}

export default MoreDetails;


