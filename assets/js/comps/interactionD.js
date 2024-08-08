const template = document.createElement('template');
template.innerHTML = `
<!--
<script src="./assets/js/lib/bootstrap.bundle.min.js" type="module" crossorigin="anonymous" defer></script>
  -->
<style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    // @import url("./assets/css/_scrollbar.css");

    :host{
      /* the shadow root */
      background-color: #ccc; /* default */
    }

    #step1 {
        // background: #f0f0f0;
        background: #B3E5FF;
      }
    
      #step2 {
        // background: #e0e0e0;
        background: #80DBFF;
      }
    
      #step3 {
        // background: #d0d0d0;
        background: #4DCCFF;
      }
    
      #step4 {
        // background: #c0c0c0;
        background: #24C1FF;
      }
    
      #step5 {
        // background: #b0b0b0;
        background: #00A1E0;
      }
    
      .preview {
        // max-height: 600px;
        overflow-y: auto;
      }

      /* width */
::-webkit-scrollbar {
    /* width: 1rem; */
    width: .5rem;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
    background: white;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightslategray;
    /* background: var(--custom-accent); */
    /* background: var(--bs-primary-rgb); */
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: #555; */
    /* background: var(--remember-accent); */
    background: lightskyblue;
  }

  </style>


  <div class="root pb-5">

  
  <div class='d-flex flex-column mb-4 gap-2'>


  <div class='d-flex flex-row align-items-center p-2 bg-dark bg-opacity-10'>
    <div class='col-2 fs-5 position-relative'>Legislation <span class="position-absolute top-100 start-0 translate-middle text-danger"><i class="bi bi-arrow-down fs-1 display-5 ps-5"></i></span></div>
    <div class='interaction flex-fill'>
      <!-- A -->
      <tdd-excustomaccordion id='a'>
        <div slot='content'>
            <div class="wc">

                <div>
                    <h2>Canada Labour Code (CLC) Parts II and IV</h2>
                    <h3>CLC Part II: Occupational Health and Safety</h3>
                    <p>Part II of the <em><a href="https://laws-lois.justice.gc.ca/eng/acts/L-2/index.html" target="_blank">Canada Labour Code</a></em> governs federal employers, such as DND/CAF, and their public service employees. It also governs military members when no sound operational reason dictates otherwise (for example in active combat).</p>
                    
                    <p>As you learned in the General Safety Individual Course, the CLC Part II grants specific safety rights to all DND civilian employees. RPD users are responsible for knowing their rights. Managers and supervisors of RPD users should also know their employees' rights to be able to ensure that these rights are being respected.</p>

                    <tdd-card id="rpp1m2note2" cat='note'>
                        <span slot='title'>NOTE</span>
                        <span slot="cardbody">
                            <p>For the purpose of the RPP, Part II of the CLC and the accompanying Canada Occupational Health and Safety Regulations (COHSRs) apply legally to public service employees. These regulations also apply legally to military personnel who supervise public service employees, and as a matter of CAF order to safeguard the health and safety of CAF personnel.</p>

                            <p>In military operational contexts, the legislation and regulations adopted as an order to protect the CAF may not apply if there is a justifiable operational reason why applying the legislation is not possible.</p>

                            <p>Reasons not to apply the RPP to military personnel are limited to hand-to-hand combat or risk of failure of a mission. Domestically, there aren't likely to be many justifiable operational reasons that would be acceptable as a deviation from the RPP.</p>
                        </span>
                    </tdd-card>

                    <h3>CLC Part IV: Administrative Monetary Penalties</h3>
                    <p>Part IV of the Canada Labour Code provides the Government of Canada with an additional mechanism to fine individuals in federal government departments who do not comply with the occupational health and safety requirements of Part II of the CLC. Fines are most often directed at leaders who fail to lead (supervisors, managers, Commanding Officers, or higher); however, no one is excluded, including RPD users.</p>
                </div>

            </div>
        </div>
      </tdd-excustomaccordion>
    </div>
  </div>

  <div class='d-flex flex-row align-items-center p-2 bg-dark bg-opacity-25'>
    <div class='col-2 fs-5 position-relative'>Regulations <span class="position-absolute top-100 start-0 translate-middle text-danger"><i class="bi bi-arrow-down fs-1 display-5 ps-5"></i></span></div>
    <div class='interaction flex-fill'>
      <!-- B -->
      <tdd-excustomaccordion id='b' class='' color='blue'>
        <div slot='content'>
            <div class="wc">

                <div>
                    <h2>Canada Occupational Health and Safety Regulations (COHSRs)</h2>
                    <p>The main goals of the RPP are laid out in the <a href="https://laws-lois.justice.gc.ca/eng/regulations/Sor-86-304/index.html" target="_blank">Canada Occupational Health and Safety Regulations (COHSRs).</a></p>
                    
                    <p>The following Parts of the COHSRs are relevant to the RPP:</p>
                    <ul>
                        <li>Part V - Boilers and Pressure Vessels</li>
                        <li>Part X - Hazardous Substances</li>
                        <li>Part XI - Confined Spaces</li>
                        <li>Part XII - Protection Equipment and Other Preventive Measures</li>
                        <li>Part XV - Hazardous Occurrence Investigation, Recording and Reporting</li>
                        <li>Part XIX - Hazard Prevention Program</li>
                    </ul>
                </div>

            </div>
        </div>
      </tdd-excustomaccordion>
    </div>
  </div>

  <div class='d-flex flex-row align-items-center p-2 bg-dark bg-opacity-50'>
    <div class='col-2 fs-5 position-relative'>Standards <span class="position-absolute top-100 start-0 translate-middle text-danger"><i class="bi bi-arrow-down fs-1 display-5 ps-5"></i></span></div>
    <div class='interaction flex-fill'>
      <!-- C -->
      <tdd-excustomaccordion id='c' class='' color='blue'>
        <div slot='content'>
            <div class="wc">

                <div>
                    <h2>Canadian Standards Association (CSA)</h2>
                    
                    <p>The DND/CAF RPP Canadian Forces Technical Order (CFTO) is based on two main standards developed by the Canadian Standards Association (CSA):</p>
                    
                    <ul>
                        <li>
                            <a href="http://ccinfoweb2.ccohs.ca/legislation/documents/stds/csa/csucr18e.htm" target="_blank">CSA Z94.4 Selection, Use, and Care of Respirators</a>
                        </li>
                        <li>
                            <a href="http://ccinfoweb2.ccohs.ca/legislation/documents/stds/csa/ccbas19e.htm" target="_blank">CSA Z180.1 Compressed Breathing Air and Systems</a>
                        </li>
                    </ul>

                    <h3>CSA Z94.4 Selection, Use, and Care of Respirators</h3>
                    <p>This is a national standard published by the CSA Group and accredited by the Standards Council of Canada. It sets out the requirements for selection, use and care of respirators and for the administration of an effective RPP in the workplace. Its purpose is to protect respirator users from any known or potential respiratory hazards.</p>

                    <h4>CSA Group Product Listing</h4>
                    <p>Under CSA Z94.4, the <a href="https://www.csagroup.org/testing-certification/product-listing/" target="_blank">CSA Group Product Listing</a> is a list of filtering facepiece respirators (FFRs) that are accepted for use by federal government personnel under Part II of the CLC.</p>

                    <h3>CSA Z180.1 Compressed Breathing Air and Systems</h3>
                    <p>This standard complements CSA Z94.4. It specifies requirements for compressed breathing air systems that provide breathing air to supplied-air respirators (SARs).</p>

                    <p>Unless otherwise specified by an authority with proper jurisdiction, this standard also provides the minimum requirements for the purity of compressed breathing air that is supplied to the service outlet, and for breathing air systems required to produce, store and distribute such air for use in supplied-air respirators, supplied-air suits, open-circuit self-contained breathing apparatuses (SCBAs), ambient air systems, and in other applications (for example vortex tubes used for heating and cooling supplied-air suits).</p>

                    <p>CSA Z180.1 also includes requirements applicable to the design, construction, commissioning, calibration, testing, operation, and maintenance of components for compressed breathing air systems.</p>

                    <p>In addition, it is referenced by many other CSA occupational health and safety standards where respiratory protection is required:</p>

                    <ul>
                        <li>CSA W117.2 on welding safety</li>
                        <li>CSA Z1006 on work in confined spaces</li>
                        <li>CSA Z1010 on work in extreme conditions</li>
                        <li>Canadian General Standards Board (CGSB)/CSA Z1610 on protection of first responders from chemical, biological, radiological, and nuclear (CBRN) agents resulting from terrorism events</li>
                        <li>CSA Z1640 on entry into clandestine drug labs</li>
                    </ul>

                    <tdd-card id="rpp1m2note3" cat='note'>
                        <span slot='title'>Note for Managers and Supervisors</span>
                        <span slot="cardbody">
                            <p>You may need training on the listed CGSB/CSA standards to be fully aware of your responsibilities as a manager or supervisor. This falls under additional training (Step 4 on the list of training requirements at the beginning of this course).</p>
                        </span>
                    </tdd-card>
                </div>

            </div>
        </div>
      </tdd-excustomaccordion>
    </div>
  </div>

  <div class='d-flex flex-row align-items-center p-2 bg-dark bg-opacity-75 text-light'>
    <div class='col-2 fs-5 position-relative'>Directives <span class="position-absolute top-100 start-0 translate-middle text-danger"><i class="bi bi-arrow-down fs-1 display-5 ps-5"></i></span></div>

    <div class='d-flex flex-column flex-fill justify-content-between gap-2'>
      <div class='interaction flex-fill'>
        <!-- D -->
        <tdd-excustomaccordion id='d' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>National Institute for Occupational Safety and Health (NIOSH) Certified Equipment List (CEL)</h2>
                      <p>NIOSH maintains a <a href="https://wwwn.cdc.gov/niosh-cel/" target="_blank">Certified Equipment
                              List</a>
                          which is a list of respirators that have been tested, approved and certified to be used safely in
                          the
                          workplace. The list is regularly updated as respirators are approved, made obsolete or their status
                          changes.
                      </p>
                      <p>The list is a tool that allows respirator users, managers and other RPP SMEs to:</p>
                      <ul>
                          <li>check if a respirator they are using or are planning to use is certified</li>
                          <li>select an appropriate respirator for the given hazard(s)</li>
                          <li>locate correct replacement component parts</li>
                          <li>learn what respirators provide protections from CBRN agents</li>
                          <li>learn what manufacturers produce respirators meeting the NIOSH standards</li>
                      </ul>

                      <p>The Canadian legislation that applies to federal government personnel accepts the NIOSH CEL
                          respirators as
                          legally compliant respirators under Part II of the CLC.</p>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>

      <div class='interaction flex-fill'>
        <!-- E -->
        <tdd-excustomaccordion id='e' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>The National Joint Council (NJC) Occupational Health and Safety (OHS) Directive</h2>
                      <p>The <a href="https://www.njc-cnm.gc.ca/directive/d7/en" target="_blank">Occupational Health and
                              Safety
                              Directive</a> is important for public service employees because it provides direction on
                          agreements
                          between the Treasury Board of Canada Secretariat and the unions. It also provides additional
                          benefits/precisions to what is listed as requirements under Part II of the CLC and the COHSRs. These
                          precisions are essential because legislation and regulations are not updated often and can be vague.
                      </p>
                      <p>The following Parts of the Directive are relevant to the RPP, please review them before continuing
                          with the
                          course: </p>
                      <ul>
                          <li>Part V - Boilers and Pressure Vessels</li>
                          <li>Part X - Hazardous Substances</li>
                          <li>Part XI - Confined Spaces</li>
                          <li>Part XII - Personal and Protective Equipment and Clothing</li>
                          <li>Part XVI - Hazardous Occurrence Investigation, Recording and Reporting (HOIRR)</li>
                          <li>Part XVIII - Refusal to Work</li>
                      </ul>
                      <p>Pay particular attention to Part 12.1 General Responsibilities of Departments and Part 12.12
                          Respiratory
                          Protection as they focus on applying the information covered in the COHSR.</p>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>
      
      <div class='interaction flex-fill'>
        <!-- F -->
        <tdd-excustomaccordion id='f' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>Treasury Board of Canada Secretariat Directive on Occupational Health Evaluations</h2>
                      <p>Section 4 of the <a
                              href="https://www.tbs-sct.canada.ca/pol/(S(5xos1g45ufdaaz45lxatyqms))/doc-eng.aspx?id=32632&section=html"
                              target="_blank">Directive on Occupational Health Evaluations, Requirements</a>, describes the
                          three types
                          of occupational health evaluations required for personnel who work with RPDs:</p>
                      <ul>
                          <li>pre-placement health evaluations</li>
                          <li>periodic health evaluations</li>
                          <li>fitness to work evaluations (FTWEs)</li>
                      </ul>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>
      
      <div class='interaction flex-fill'>
        <!-- G -->
        <tdd-excustomaccordion id='g' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>Health Canada Occupational Health Evaluation Guide (OHEG)</h2>
                      <p>DND managers of public service employees use Section XXIV of the Occupational Health and Evaluation
                          Guide,
                          Employees Who Must Use Respirators, to plan and decide when to do pre-placement and periodic health
                          evaluations based on the employee’s occupation and age. The OHEG can be accessed via the <a
                              href="https://gcxgce.sharepoint.com/teams/1000693/" target="_blank">TBS Occupational Health and
                              Safety
                              Community of Practice on gcxchange</a>.</p>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>
    </div>
  </div>

  <div class='d-flex flex-row align-items-center p-2 bg-dark text-light'>
    <div class='col-2 fs-5 position-relative'>Orders</div>

    <div class='d-flex flex-column flex-fill justify-content-between gap-2'>
      <div class='interaction flex-fill'>
        <!-- H -->
        <tdd-excustomaccordion id='h' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>Defence Administrative Orders and Directives (DAOD) 5021-1, Respiratory Protection</h2>
                      <p><a href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/defence-administrative-orders-directives/5000-series/5021/5021-1-respiratory-protection.html"
                              target="_blank">DAOD 5021-1, Respiratory Protection</a> is issued by MILPERSCOM (sometimes known
                          as the
                          Chief of Military Personnel (CMP)). The directive provides structure for the expansive DND
                          Respiratory
                          Protection Program.</p>
                      <p>This DAOD describes the purpose of the RPP and explains the role of the National Joint Council, the
                          Treasury Board of Canada Secretariat, Health Canada, Base/Wing Commanders or unit Commanding
                          Officers and
                          others with general responsibilities for functions associated with the implementation of the DND/CAF
                          RPP.
                      </p>
                      <p>DAOD 5021-1 satisfies military and civilian requirements under Part II of the Canada Labour Code, the
                          COHSRs, the Treasury Board of Canada Secretariat Occupational Safety and Health policies, and
                          various other
                          directives and standards (from Health Canada, CSA, etc.).</p>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>
      <div class='interaction flex-fill'>
        <!-- I -->
        <tdd-excustomaccordion id='i' class='' color='blue'>
          <div slot='content'>
              <div class="wc">

                  <div>
                      <h2>DND Respiratory Protection Program</h2>
                      <p>The <a href="http://intranet.mil.ca/assets/DefenceTeam/docs/en/OHS Secretariat/vcds-resp-prot-prog-2019.pdf" target="_blank">DND Respiratory Protection Program</a> (DND RPP) is a Canadian Forces Technical Order (CFTO) which acts as a guide for the RPP at DND/CAF. Other more procedural guides, such as the Fire Marshal Directives (FMDs) and Unit Standing Operating Procedures (SOPs), are issued based on the DND RPP.</p>

                      <p>The DND RPP is a reference tool that not only points to other reference tools, but also describes roles and responsibilities of everyone involved in all aspects of the RPP.</p>
                  </div>

              </div>
          </div>
        </tdd-excustomaccordion>
      </div>
    </div>
  </div>


</div>

    </div>
 
`;

class interactionD extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  connectedCallback() {
    // console.log('comp custom Interaction connected')

  }
}
customElements.define('tdd-interaction-d', interactionD);