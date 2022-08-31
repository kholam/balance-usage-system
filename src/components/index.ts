import GlobalStyles from "./GlobalStyles";
import Container from "./common/Container";
import Card from "./card/Card";
import tw from "twin.macro";
import Avatar from "./common/Avatar";
import  { BadgeInfo } from "./common/Badge";
import ProgressBar from "./common/ProgressBar";
import Button from "./common/Button";

const TableHeader = tw.th`
    px-3 py-2 text-xs font-medium
    uppercase border-b border-gray-100
`

const TableData = tw.td`
    px-3 py-2 border-b border-gray-100
    whitespace-nowrap
`

export {
    GlobalStyles,
    Container,
    Card,
    TableHeader,
    TableData,
    Avatar,
    BadgeInfo,
    ProgressBar,
    Button,
}