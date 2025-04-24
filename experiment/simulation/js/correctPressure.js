function correctPressure()
{
	let str=` 

		<div class="container mt-4">
			<h3><center>PRESSURE SWITCH TECHNICAL SPECIFICATIONS</center></h3>
		      <table class="table table-bordered table-hover" style="margin-bottom: 0px;    border-width: 3px;border-color: #343a40;font-size: 15px;
    font-weight: bold;">
		            <thead class="table-light">
		                <tr>
		                    <th>#</th>
		                     <th>Sr .no</th>
		                    <th>Parameter</th>
		                    <th>Data</th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr><td rowspan="9"><b>GENERAL</b></td><td>1</td><td>Tag Number</td>
		                <td> PSHH_1/PSHH_2/PSLL_1/PSLL_2</td></tr>
		                <tr><td>2</td><td>Service</td>
						 <td>Process Liquid</td>
						</tr>
		                <tr><td>3</td><td>Location</td><td>As per P & I diagram</td>
		                 </tr>
		                <tr><td>4</td><td>Mounting</td>
		                 <td> Top</td>
		                </tr>
		                <tr><td>5</td><td>Quantity</td>
		                <td> 5</td>
		                </tr>
		                <tr><td>6</td><td>Area Classification</td><td>Safe Area</td></tr>
		                <tr><td>7</td><td>Certification</td><td>NA</td></tr>
		                <tr><td>8</td><td>Enclosure</td>
		                 <td> IP 65</td>
		                </tr>
		                <tr><td>9</td><td>Pipe Line Number</td><td>As per P & I diagram</td></td></tr>
		                
		                <tr>
		                <td rowspan="4"><b>PROCESS CONDITIONS</b></td>
		                <td>10</td>
		                <td>Fluid | Fluid State</td>
		                <td >Air | Gaseous
						
						</tr>
						
		                <tr>
		                <td>11</td>
		                <td >Oper. Pressure  | Oper. Temperature</td>
		                <td>0.2 Kg/cm<sup>2</sup> | 80 &degC
		                </td>
		                </tr>
		                <tr>
		                <td>12</td>
		                <td>Design Pressure | Design. Temperature</td>
		                <td>0.6 Kg/cm<sup>2</sup> | 75 &degC
		                
		                </td>
		                </tr>
		                <tr><td>13</td>
		                <td>Alt. Design Pressure | Alt. Design Temperature</td><td>NA | NA</td></tr>
		                
		                <tr><td rowspan="7"><b>ELEMENT</b></td><td>14</td><td>Type</td>
		                <td> Bellow actuated</td>
		                </tr>
		                <tr><td>15</td><td>Element Material | Wetted Body material</td>
		                 <td> 316SS | 316SS
						</td>
						</tr>
		                <tr><td>16</td><td>Wetted Process Connection Material</td>
						<td> 316SS
						</td>
						</tr>
		                <tr><td>17</td><td>Process Connection</td>
		               
		                <td> Special food grade connector
						</td>
		                
		                </td>
		                </tr>
		                <tr><td>18</td><td>Orientation</td>
		                <td>Side mounted
		                
		                </td></tr>
		                <tr><td>19</td><td>Pressure Rating</td>
		                <td>
		               0.8 Kg/cm<sup>2</sup>(g)		               
		                </td></tr>
		                <tr><td>20</td><td>Enclosure</td>
		                <td>IP 65
		                 
		               </td></tr>
		                
		                <tr><td rowspan="10"><b>SWITCH</b></td><td>21</td><td>Type</td><td>Auto reset Micro-switch(Form C)</td></tr>
		                <tr><td>22</td><td>Contact Config.</td><td>2 SPDT</td></tr>
		                <tr><td>23</td><td>Contact Voltage</td><td>220 V DC</td></tr>
		                <tr><td>24</td><td>On Measurement Increase Switch</td><td>
		                 Opens
		             </td></tr>
		                <tr><td>25</td><td>Set Point 1</td><td>0.4 Kg/cm²(g)</td></tr>
		                <tr><td>26</td><td>Instrument Range</td><td>0.1 to 1 Kg/cm²</td></tr>
		                <tr><td>27</td><td>Conduit Connection Size</td><td>½” NPT (F)</td></tr>
		                <tr><td>28</td><td>Output Signal</td><td>Potential free</td></tr>
		                <tr><td>29</td><td>Deadband</td><td>Minimum</td></tr>
		                <tr><td>30</td><td>Housing Material</td><td>Aluminum</td></tr>
		                
		                <tr><td rowspan="8"><b>DIAPHRAGM SEAL</b></td><td>31</td><td>Required</td><td>YES</td></tr>
		                <tr><td>32</td><td>Process Connection Size</td><td>½” NPT (F)</td></tr>
		                <tr><td>33</td><td>Diaphragm Material</td><td>SS 316</td></tr>
		                <tr><td>34</td><td>Housing Material</td><td>SS 316</td></tr>
		                <tr><td>35</td><td>Fill Liquid</td><td>Not required</td></tr>
		                <tr><td>36</td><td>Capillary Material</td><td>NA</td></tr>
		                <tr><td>37</td><td>Capillary Type | Capillary Length</td><td>NA | NA</td></tr>
		                <tr><td>38</td><td>Flushing Connection</td><td>YES</td></tr>
		                
		                <tr><td rowspan="5"><b>OPTIONS</b></td><td>39</td><td>Integral Meter | Scale</td><td>NA | NA</td></tr>
		                <tr><td>40</td><td>Mounting Brackets</td><td>NA</td></tr>
		                <tr><td>41</td><td>Lightning Protection</td><td>YES</td></tr>
		                <tr><td>42</td><td>Accessories required</td><td>Snubber</td></tr>
		                <tr><td>43</td><td>Factory Calibration</td><td>YES</td></tr>
		                
		                <tr><td rowspan="2"><b>COMMUNICATION</b></td><td>44</td><td>Communication with</td><td>LCP</td></tr>
		                <tr><td>45</td><td>Internal Diagnostics</td><td>NA</td></tr>
		                
		                <tr><td rowspan="3"><b>PURCHASE</b></td><td>46</td><td>Manufacturer</td>
		                <td> Switzer
		                 </td>
		                
		                </tr>
		                <tr><td>47</td><td >Model</td><td>Later*</td></tr>
		                 <tr><td>48</td><td >Serial Number</td><td>Later*</td></tr>
		            </tbody>
		        </table>
		        
		    </div>
		    `;
		$(".step1").html(str);
}