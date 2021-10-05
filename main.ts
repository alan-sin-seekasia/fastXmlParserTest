import * as xmlParser from 'fast-xml-parser'

interface targetStructure {
    country: string,
    keyword: any,
    jobFunctions: [string],
    locations: [string],
    minSalary: string,
    maxSalary: string,
    jobTypes: [string],
    careerLevels: [string],
    salaryType: string,
}

const convert = (xmlString: string) => {
    const result = xmlParser.parse(xmlString)["JobSearchs"]["JobSearch"]["JobCriteria"]
    console.log(result);
    const parsedJson: targetStructure = {
        country: result["CountryCode"],
        keyword: result["KeywordSearchCriterias"],
        jobFunctions: result["UniversalJobAreas"],
        locations: result["JobLocations"],
        minSalary: result["SalaryFrom"],
        maxSalary: result["SalaryTo"],
        jobTypes: result["JobTypes"],
        careerLevels: result["CareerLevel"],
        salaryType: result["SalaryType"],
    }
    console.log(parsedJson);
}

convert(`<?xml version="1.0" encoding="UTF-8"?>
<JobSearchs>
   <JobSearch ver="0">
      <JobCriteria>
         <KeywordSearchFields>JobDetails</KeywordSearchFields>
         <KeywordOption>Any</KeywordOption>
         <WildcardOption>None</WildcardOption>
         <KeywordSearchCriterias>
            <KeywordSearchCriteria>
               <Keywords>a</Keywords>
               <KeywordSearchFields>Companies</KeywordSearchFields>
               <KeywordOption>Complex</KeywordOption>
               <WildcardOption>AllPhrase</WildcardOption>
            </KeywordSearchCriteria>
         </KeywordSearchCriterias>
         <Positions />
         <PositionExclude />
         <Companies />
         <CompanyExclude />
         <UniversalJobAreas>1</UniversalJobAreas>
         <JobChannels />
         <JobLocations />
         <ExactMatch_StateDistrict>False</ExactMatch_StateDistrict>
         <YearsOfWorkExpFrom>0</YearsOfWorkExpFrom>
         <YearsOfWorkExpTo>0</YearsOfWorkExpTo>
         <ExactMatch_Exp>False</ExactMatch_Exp>
         <ExactMatch_EducationLevel>False</ExactMatch_EducationLevel>
         <SalaryFrom>0</SalaryFrom>
         <SalaryTo>0</SalaryTo>
         <ExactMatch_Salary>True</ExactMatch_Salary>
         <SalaryType>1</SalaryType>
         <SearchSalaryDetail>True</SearchSalaryDetail>
         <JobTypes />
         <CareerLevel />
         <AdsListDuration>30</AdsListDuration>
         <AccountSubAccount />
         <AccountNum />
         <SubAccont />
         <EmpIndustry />
         <EmpIndustryExclude />
         <AdsStatus>A</AdsStatus>
         <CountryCode>HK</CountryCode>
         <DisplayBlindAds>True</DisplayBlindAds>
         <JobIndustry />
         <OverseasCountries />
         <LocalJobOnly>False</LocalJobOnly>
         <PostDateRoundToMinute>False</PostDateRoundToMinute>
      </JobCriteria>
   </JobSearch>
</JobSearchs>`)