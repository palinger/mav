import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }
});

class TermsAndConditions extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <div class="mod-col col-md-12 col-md-12"><p></p>
                    <h1>Terms and conditions</h1>
                    <p>These conditions explain the rights, obligations, and responsibilities of all parties to this Agreement. Where we use the word “you” or “your” it means the Customer: “we”, “us” or “our” means the Remover. These terms and conditions can be varied or amended subject to prior written agreement. Your attention is drawn to Clauses 4, 9, 10, 11 and 12 which set out our liability to you for loss of or damage to goods and property.</p>
                    <p><strong>1.Our Quotation</strong></p>
                    <p>Our quotation, unless otherwise stated constitutes the entire agreement between the parties together with these terms and conditions but it does not include customs duties and inspections or any other fees or taxes payable to government bodies. It does include us accepting liability for your goods, subject to clauses 2, 3, 5 and subject to the provisions of Clauses 4, 9, 10, 11 and 12.</p>
                    <p>We may change the price or make additional charges if circumstances are found to apply which have not been taken into account when preparing our quotation and confirmed by us in writing. These include:</p>
                    <ul>
                        <li>(a)You do not accept our quotation in writing within 14 days, or the work is not carried out or completed within two months.</li>
                        <li>(b) Our costs change because of currency fluctuations or changes in taxation or freight charges beyond our control</li>
                        <li>(c) The work is carried out outside normal hours (07.00-19.00hrs) at your request</li>
                        <li>(d) If you collect some or all of the goods from our warehouse, we are entitled to make a charge for handing them over.</li>
                        <li>(e)We supply any additional services, including moving or storing extra goods (these conditions apply to such work).</li>
                        <li>(f)The stairs, lifts or doorways are inadequate for free movement of the goods without mechanical equipment or structural alteration, or the approach, road or drive is unsuitable for our vehicles and/or containers to load and/or unload within 20 metres of the doorway.</li>
                        <li>(g) We have to pay parking or other fees, fines or other charges in order to carry out services on your behalf.</li>
                        <li>(h)There are delays or events outside our reasonable control which increase or extend the resources or time allowed to complete the agreed work.</li>
                        <li>(i)Extra fuel charges apply when travelling outside the M25.</li>
                        <li>(j)There is a minimum charge of £56 (per half tonne) for taking goods to a refuse/recycling centre.</li>
                        <li>(k)We agree in writing to increase our limit of liability set out in clause 9. In any such circumstances, adjusted charges will apply and become payable.</li>
                    </ul>
                    <p><strong>2. Work not included in the Quotation<br/>
                    </strong></p>
                    <p>Unless agreed by us in writing, we will not:</p>
                    <ul>
                        <li>(a)Dismantle or assemble unit or flat pack furniture, fitments or fittings</li>
                        <li>(b)Disconnect, re-connect, dismantle or re-assemble appliances, fixtures, fittings or equipment.</li>
                        <li>(c)Take up or lay fitted floor coverings.</li>
                        <li>(d)Move items from a loft, unless properly lit and floored and safe access is provided.</li>
                        <li>(e)Move or store any items excluded under Clause 5.</li>
                    </ul>
                    <p>Our staff are not authorized or qualified to carry out such work. We recommend that a properly qualified person is separately employed by you to carry out these services.</p>
                    <p><strong>3. Your responsibility</strong></p>
                    <p>It will be your sole responsibility to:</p>
                    <ul>
                        <li>(a) Declare to us, in writing, the value of the goods being removed and/or stored. If it is subsequently established that the value of the goods removed or stored is greater than the actual value you declare, you agree that our liability will be reduced to reflect the proportion that your declared value bears to their actual value.</li>
                        <li>(b) Obtain at your own expense, all documents, permits including parking or visitor permits or vouchers or relevant change for the parking metres, permissions, licences, customs documents necessary for the removal to be completed.&nbsp; This includes reserving a suitable parking place/suspension bay within close proximity of the property for our vehicle/s.</li>
                        <li>(c) Be present or represented during the collection and delivery of the removal .&nbsp; We are not responsible for any goods if the location or property is left unattended.</li>
                        <li>(d) Ensure authorized signature on agreed inventories, receipts, waybills, job sheets or other relevant documents by way of confirmation of collection or delivery of goods.</li>
                        <li>(e) Take all reasonable steps to ensure that nothing that should be removed is left behind and nothing is taken away in error.</li>
                        <li>(f) Arrange proper protection for goods left in unoccupied or unattended premises, or where other people such as (but not limited to) tenants or workmen are, or will be present.</li>
                        <li>(g) Prepare adequately and stabilize all appliances or electronic equipment prior to their removal.</li>
                        <li>(h) Empty, properly defrost and clean refrigerators and deep freezers. We are not responsible for the contents.</li>
                        <li>(i)Provide us with a telephone number and contact address for correspondence during removal transit and/or storage of goods.</li>
                        <li>Other than by reason of our negligence or breach of contract, we will not be liable for any loss or damage, costs or additional charges that may arise from failure to discharge these responsibilities.</li>
                    </ul>
                    <p><strong>4. Goods not to be submitted for removal or storage</strong></p>
                    <p>Unless previously agreed in writing by a director or other authorized company representative, the following items must not be submitted for removal or storage and will under no circumstances be moved or stored by us. The items listed below may present risks to health and safety and of fire.</p>
                    <ul>
                        <li>(a)Prohibited or stolen goods, drugs, pornographic material, potentially dangerous, damaging or explosive items, including gas bottles, aerosols, paints, firearms and ammunition.</li>
                        <li>(b)Jewellery, watches, trinkets, precious stones or metals, money, deeds, securities, stamps, coins, or goods or collections of any similar kind.</li>
                        <li>(c)Plants or goods likely to encourage vermin or other pests or to cause infestation or contamination.</li>
                        <li>(d)Perishable items and/or those requiring a controlled environment. (e)Any animals, birds or fish.</li>
                        <li>(f)Goods which require special licence or government permission for export or import.</li>
                    </ul>
                    <p>If we do agree to remove such goods, we will not accept liability for loss or damage unless we are negligent or in breach of contract, in which case all these conditions will apply. If you submit such goods without our knowledge we will make them available for your collection and if you do not collect them within a reasonable time we will apply for an appropriate court order to dispose of any such goods found in the consignment without notice. You will furthermore pay to us any charges, expenses, damages, legal costs, interest or penalties incurred by us.</p>
                    <p><strong>5. Ownership of the goods</strong></p>
                    <p>By entering into this Agreement, you guarantee that:</p>
                    <ul>
                        <li>(a)The goods to be removed and/or stored are your own property, or</li>
                        <li>(b)The person(s) who own or have an interest in them have given you authority to make this contract and have been made aware of these conditions.</li>
                        <li>(c)You will pay us for any claim for damages and/or costs brought against us if either warranty 6 (a) or (b) is not true.</li>
                    </ul>
                    <p><strong>6. Coupons and Discounts</strong></p>
                    <p>Coupons and discounts are issued in Man and Vans sole discretion and we are entitled at any time to correct, cancel or reject a coupon or discount for any reason and without limitation where it has been distributed in an unauthorised manner. Users do not have a right to coupons and discounts, and cannot be earned. Coupons and discounts are issued under specific terms and conditions regulating when and how they may be used.</p>
                    <p>Coupons and discounts can only be used once. Coupons and discounts are not stackable and can only be used once per campaign.</p>
                    <p><strong>6. Charges if you postpone or cancel the removal<br/>
                    </strong></p>
                    <p>By agreeing to undertake the removal or storage we incur costs in preparing for it and also lose the opportunity to undertake further work that would use the same resources. Because of this, we may suffer loss if you cancel this contract or postpone its performance. The amount we will potentially lose will depend upon when the cancellation and/or postponement occurs. If you postpone or cancel this Agreement, we will charge you according to how much notice is given. “Working days” refer to the normal working week of Monday to Friday and excludes weekends and Public Holidays.<br/>
                        More than 7 working days before the removal was due to start&nbsp;&nbsp; &nbsp;: No charge.<br/>
                        If less than 7 days&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;: Not more than 50% of the removal charge.<br/>
                        Within 24 hours&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;: 100% of the removal charge.</p>
                    <p><strong>7. Payment<br/>
                    </strong></p>
                    <p>Unless otherwise agreed by us in writing: Payment is required by cleared funds in advance of the removal or storage period.</p>
                    <p><strong>8. Determination of amount of our liability for loss or damage<br/>
                    </strong></p>
                    <p>Our liability for loss or damage is limited, as set out in clause 8(a) below. Alternatively, you may request us to increase our liability, as set out in clause 8 (b)</p>
                    <ul>
                        <li>(a) In the event of our negligence or breach of contract resulting in loss of or damage to your goods, we shall not be liable for the first £100 of any claim and for any claim exceeding this amount will pay a sum equivalent to the cost of their repair or replacement (which of these alternatives being entirely at our discretion) up to a maximum of £100,000 in the case of loss or destruction of the entire consignment or in the case of loss or damage to part of the consignment, the proportion that the value the lost or damaged part bears to the value of the entire consignment, multiplied by £100,000.</li>
                        <li>(b) Prior to the commencement of work and subject to our having received your itemized valued inventory (see 3.1.1) we may agree to increase our liability, for an additional charge. We will not unreasonably withhold consent to such a request. This is not insurance cover and you are strongly advised to ensure that your property is adequately insured during the removal and to show this contract to your insurance company.<br/>
                            (c)In the event of direct loss of or damage to your goods, our liability to you is to be assessed as a sum equivalent to the cost of their repair or replacement whichever is the smaller sum, taking into account age, wear and tear, depreciation and condition of the goods immediately prior to their loss or damage, and subject to the maximum liability of&nbsp; £100,000 (unless we have agreed a higher amount with you). For the avoidance of doubt, all liability and compensation for loss shall be calculated as above and not on a “new for old” basis.<br/>
                            We will always seek to repair a good in the first instance in which case the damage will be limited to the repair costs. Where the lost or damaged item is part of a pair or set, our liability to you, where it is assessed as the cost of replacement of that item, is to be assessed as a sum equivalent to the cost of that item in isolation, not the cost of that item as part of a pair or set.</li>
                        <li>(d) For goods destined to or received from a place outside the UK. We will only accept liability if you provide us with a detailed valuation of your goods on the valuation form which we provide.<br/>
                            We do not accept liability for loss of or damage to goods confiscated, seized, removed or damaged by Customs Authorities or other Government Agencies unless we have been negligent or in breach of contract.<br/>
                            We will accept liability for loss or damage:<br/>
                            – arising from our negligence whilst the goods are in our physical possession, or<br/>
                            – whilst the goods are in the possession of others if the loss or damage is established to have been caused by our failure to pack the goods to a reasonable standard where we have been contracted to pack the goods that are subject to the claim.</li>
                        <li>e) An item is defined as :&nbsp; The entire contents of a wardrobe, drawer,&nbsp; box, parcel, package, carton, or similar container; and any other object or thing that is moved, handled or stored by us.</li>
                    </ul>
                    <p><strong><br/>
                        9. Damage to premises or property other than goods<br/>
                    </strong></p>
                    <p>Because third party contractors are frequently present at the time of collection or delivery our liability for loss or damage is limited as follows:</p>
                    <ul>
                        <li>If we cause loss or damage to premises or property other than goods for removal as a result of our negligence or breach of contract, our liability shall be limited to making good the damaged area only provided that we are not liable for the first £250 of any claim.</li>
                        <li>If we cause damage as a result of moving goods under your express instruction, against our advice, and where to move the goods in the manner instructed is likely to cause damage, we shall not be liable.</li>
                        <li>If we are responsible for causing damage to your premises or to property other than goods submitted for removal and/or storage, you must note this on the worksheet or delivery receipt as soon as practically possible or within a reasonable time. This is fundamental to the Agreement.</li>
                    </ul>
                    <p><strong>10. Exclusions of liability<br/>
                    </strong></p>
                    <p>We will not be liable for loss of or damage to your goods as a result of non delivery or mis delivery, fire or explosion howsoever that fire or explosion was caused, unless we have been negligent. Other than as a result of our negligence we will not be liable for any loss of, damage to, or failure to produce the following goods :-</p>
                    <ul>
                        <li>(a) Bonds, Securities, Stamps of all kinds, Manuscripts or other Documents or Electronically held Data Records, Mobile Telephones;</li>
                        <li>(b)Plants or goods likely to encourage vermin or other pests or to cause infestation or contamination;</li>
                        <li>(c)Perishable items and/or those requiring a controlled environment;</li>
                        <li>(d)Furs exceeding £100 in value, Jewellery, Watches, Precious Stones and Metals, Money, Coins, Deeds;</li>
                        <li>(e)Any animals, birds or fish.</li>
                        <li>Other than as a result of our negligence we will not be liable for any loss of, damage to, or failure to produce the goods if caused by any of the following circumstances:-</li>
                        <li>(a)By war, invasion, acts of foreign enemies, hostilities (whether war is declared or not), civil war, terrorism, rebellion and/or military coup, Act of God, fires, flood, tempest or other adverse weather conditions, industrial action or other such events outside our reasonable control;</li>
                        <li>(b)Loss or damage arising from Chemical, Biological, Bio-chemical, Radioactive, Electromagnetic activity and or weapons and Cyber Attack;</li>
                        <li>(c)Perishable items and/or those requiring a controlled environment;</li>
                        <li>(d)Indirect or consequential loss of any kind or description including loss of profits; business interruptions; loss of contracts; or loss of revenue whatsoever and howsoever arising;</li>
                        <li>(e)By normal wear and tear, natural or gradual deterioration, leakage or evaporation or from perishable or unstable goods. This includes goods left within furniture or appliances;</li>
                        <li>(f)By vermin, moth, insects and similar infestation, damp, mould, mildew or rust;</li>
                        <li>(g)By cleaning, repairing or restoring unless we arranged for the work to be carried out;</li>
                        <li>(h)By change to atmospheric or climatic conditions;</li>
                        <li>(i) For any goods in wardrobes, drawers or appliances, or in a package, bundle, carton, case or other container not both packed and unpacked by us;</li>
                        <li>(j) Loss of or damage to china, glassware and fragile items unless they have been both professionally packed and unpacked by us or our Subcontractor. In the event of an accident involving an owner packed container where damage would have occurred irrespective of the quality of the packing, then our liability is limited to £100 or its actual value whichever is less;</li>
                        <li>(k) For electrical or mechanical derangement to any appliance, instrument, clock, computer or other equipment unless there is evidence of related external damage;</li>
                        <li>(l)Loss or damage of motor vehicles caused by scratching, denting and marring unless you obtain from us a pre-collection condition report;</li>
                        <li>(m)Loss or damage to a vehicle whilst being driven or for the purpose of being driven under its own power other than for the purpose of loading onto or unloading from the carrying conveyance or container. Loss or damage sustained by accessories and removable items unless lost with the vehicle;</li>
                        <li>(n) For any goods which have a pre-existing defect or are inherently defective;</li>
                        <li>(o) For any goods not delivered or mis-delivered;</li>
                        <li>(p)For complying with any acts, regulations, bye laws, orders or restrictions imposed by any government or authority (public or local); and</li>
                        <li>(q) Theft of any goods.</li>
                    </ul>
                    <p>No staff member shall be separately liable to you for any loss, damage, mis-delivery, errors or omissions under these terms. Our liability will cease upon handing over goods from our warehouse or upon completion of delivery.</p>
                    <p><strong>11.Time limit for claims<br/>
                    </strong></p>
                    <p>For goods which we deliver, you must notify us in writing of any visible loss, damage or failure to produce any goods at the time of delivery.</p>
                    <p>If you or your agent collect the goods, you must notify us in writing of any loss or damage at the time the goods are handed to you or your agent.</p>
                    <p>Notwithstanding clauses 8, 9 and 10 we will not be liable for any loss of or damage to the goods unless a claim is notified to us, or to our agent or the company carrying out the collection or delivery of the goods on our behalf, in writing as soon as such loss or damage is discovered (or with reasonable diligence ought to have been discovered) and in any event within seven (7) days of delivery of the goods by us.</p>
                    <p>The time limit for notifying us of your claim may be extended upon receipt of your written request provided such request is received within seven (7) days of delivery. Consent to such a request will not be unreasonably withheld.</p>
                    <p><strong>12. Delays in transit<br/>
                    </strong></p>
                    <p>Other than by reason of our negligence or breach of contract, we will not be liable for delays in transit.</p>
                    <p>If the delay arises because of our negligence, we agree to pay your reasonable expenses that arise as a direct consequence of the delay, such as reasonable hotel costs.&nbsp; In any event, our liability shall not exceed £2000.<br/>
                        Job arrival times are estimates only. We do our best to be on time, but circumstances beyond our control may cause delays. No discounts are offered.</p>
                    <p>If through no fault of ours we are unable to deliver your goods, we will take them into store. The Agreement will then be fulfilled and any additional service(s), including storage and delivery, will be at your expense.</p>
                    <p><strong>13. Our Right to Hold the Goods (lien)</strong></p>
                    <p>We shall have a right to withhold and/or ultimately dispose of some or all of the goods until you have paid all our charges and any other payments due under this or any other Agreement. These include any charges that we have paid out on your behalf. While we hold the goods you will be liable to pay all storage charges and other costs incurred by our withholding your goods and these terms and conditions shall continue to apply.</p>
                    <p><strong> 14. Our right to sub-contract the work<br/>
                    </strong></p>
                    <p>We reserve the right to sub-contract some or all of the work. If we sub-contract, then these conditions&nbsp; will still apply save to the extent that nothing in these terms and conditions shall confer on any other third party any benefit or right to enforce these terms and conditions.<br/>
                        <strong><br/>
                            15. Route and method<br/>
                        </strong></p>
                    <p>We have the discretion to choose the method and route by which to carry out the work.<br/>
                        Unless it has been specifically agreed otherwise in writing in our Quotation, other space/volume/capacity on our vehicles and/or the container may be utilized for consignments of other customers.<br/>
                        If you stipulate the routes/procedures or facilities to be used and or followed, you will be liable for any loss or damage or other consequences resulting from our compliance or attempts to comply with such stipulations.</p>
                    <p><strong>16.Applicable law<br/>
                    </strong></p>
                    <p>This contract shall be governed by and construed in accordance with the laws of England and the parties submit to the exclusive jurisdiction of the English Courts.</p>
                    <p><strong>17.Your forwarding address<br/>
                    </strong></p>
                    <p>If you send goods to be stored, you must provide an address for correspondence and notify us if it changes. All correspondence and notices will be considered to have been received by you seven days after sending it to your last address recorded by us.</p>
                    <p>If you do not provide an address or respond to our correspondence or notices, we may publish such notices in a public newspaper in the area to or from which the goods were removed. Such notice will be considered to have been received by you seven days after the publication date of the newspaper. If we are unable to contact you, we will charge you any costs incurred in establishing your whereabouts.</p>
                    <p><strong>18.List of goods (inventory) or receipt<br/>
                    </strong></p>
                    <p>A list of goods (inventory) is not produced unless requested in writing. Where we produce a list of your goods (inventory) or a receipt and send it to you, it will be accepted as accurate unless you write to us within 10 days of the date of our sending, or a reasonable period agreed between us, notifying us of any errors or omissions.</p>
                    <p><strong>19. Revision of storage charges<br/>
                    </strong></p>
                    <p>We review our storage charges periodically. You will be given 3 months notice in writing of any increases.<br/>
                        <strong><br/>
                            20. Access to Storage<br/>
                        </strong></p>
                    <p>We require three business days notice to access or remove goods from storage. We impose a £50 access fee which is payable when you request for access the goods.</p>
                    <p><strong>21. Our right to Sell or dispose of the Goods</strong></p>
                    <p>If payment of our charges relating to your goods is in arrears, and on giving you three months notice, we are entitled to require you to remove your goods from our custody and pay all money due to us. If you fail to pay all outstanding amounts due to us, we may sell or dispose of some or all of the goods without further notice. The cost of the sale or disposal will be charged to you. The net proceeds will be credited to your account and any eventual surplus will be paid to you without interest. If the full amount due is not received, we may seek to recover the balance from you.</p>
                    <p>If you fail to collect the goods from storage as agreed, we reserve the right to sell the goods. The net proceeds will the credited as above.</p>
                    <p><strong>22. Termination</strong></p>
                    <p>If payments are up to date, we will not end this contract except by giving you three months notice in writing. If you wish to terminate your storage contract, you must give us at least 10 working days notice. If we can release the goods earlier, we will do so, provided that your account is paid up to date. Charges for storage are payable to the date when the notice should have taken effect.</p>
                    <p>We reserve the right to refuse, cease or to stop the job at any time if our staff are verbally or physically abused.</p>
                    <p><strong>23. Validity and Severance</strong></p>
                    <p>If any of these provisions is held to be illegal or unenforceable, in whole or in part, under and enactment or rule or law, then that provision shall to the extent necessary and insofar as permitted by law (i) be deemed not to form part of these terms and conditions; and (ii) be deemed to be replaced by such provision as is valid and enforceable and which is as close as permissible to the invalid or unenforceable provision. The validity and enforceability of the remainder of these Conditions shall not be effected.</p>
                    <p><strong>24. Variation of these Terms and Conditions</strong></p>
                    <p>Variations to these Terms and Conditions may only be made in writing by the owners or the Financial Controller of the Remover and only by express reference to this provision.</p></div>
            </Paper>
        );
    }
}
TermsAndConditions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsAndConditions);