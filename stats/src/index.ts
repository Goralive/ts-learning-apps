import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summaryMU = Summary.winsAnalysisWithHtmlReport('Man United');
const summaryEverton = Summary.winsAnalysisWithConsoleReport('Everton');

matchReader.load();
summaryMU.buildAndPrintReport(matchReader.matches);
summaryEverton.buildAndPrintReport(matchReader.matches);
