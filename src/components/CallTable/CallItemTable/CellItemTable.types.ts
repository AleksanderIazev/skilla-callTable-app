export interface ICallItemTableProps {
    abuse: any[];
    candidate_id: number;
    candidate_link: string;
    candidate_name: string;
    candidate_vacancy_name: string;
    contact_company: string;
    contact_name: string;
    date: string;
    date_notime: string;
    disconnect_reason: string;
    errors: string[];
    from_extension: string;
    from_number: string;
    from_site: number;
    id: number;
    in_out: number;
    is_skilla: number;
    line_name: string;
    line_number: string;
    partner_data: {
        id: string;
        name: string;
        phone: string;
    };
    partnership_id: string;
    person_avatar: string;
    person_id: number;
    person_name: string;
    person_surname: string;
    record: string;
    results: {
        title: string;
        tooltip: string;
        type: string;
    }[];
    source: string;
    stages: any[];
    status: string;
    time: number;
    to_extension: string;
    to_number: string;
}
