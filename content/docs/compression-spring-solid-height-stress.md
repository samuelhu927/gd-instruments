---
title: "Compression Spring Solid Height Stress: When the Coils Touch and the Wire Yields"
date: 2020-08-19
layout: "single"
---
Solid height is the axial length of a compression spring when all coils are in contact. It is a geometric limit, but it is also a stress limit: when the spring is compressed to solid height, the wire experiences a stress that is higher than at any other point in its deflection range. If that stress exceeds the material’s yield strength, the spring will take a permanent set—it will not return to its original free length when the load is removed.

The solid height stress is calculated using the same fundamental stress equation as the working stress, but with the load that corresponds to solid height. That load is the force required to compress the spring until the coils touch, and it can be estimated from the spring rate and the difference between free length and solid height. The shear stress at solid height is then computed from the load, the wire diameter, the mean coil diameter, and the stress correction factor. For a spring that is designed to operate well below solid height, the solid height stress may be two or three times the working stress, and it can approach or exceed the torsional yield strength of the wire.

The consequence of solid height stress exceeding the yield strength is permanent set. When the spring is compressed to solid height, the wire yields in torsion, and the coils do not spring back to their original spacing. The spring’s free length decreases, and the load at a given height changes. In a mechanism that relies on the spring’s free length for positioning or preload, this permanent set can cause a functional failure even though the spring has not fractured. The risk is particularly high for springs that are adjusted or set by compressing them to solid height during assembly, because the assembly process itself can introduce the permanent set that degrades performance.

The design solution is to ensure that the solid height stress is below the yield strength with an adequate margin. The margin depends on the application: for a static spring that is never compressed to solid height in service, a modest margin may be sufficient; for a spring that may be compressed to solid height during assembly or overload, a larger margin is required. The yield strength of the wire in torsion is not directly the same as the tensile yield strength; it is related to the shear yield strength, which is typically about 0.577 times the tensile yield strength for steels. The allowable solid height stress should be based on the shear yield strength, not the tensile yield strength.

End grinding affects the solid height stress in two ways. Grinding reduces the solid height, which reduces the load at solid height and therefore the stress. However, grinding also reduces the number of coils that contribute to the solid stack, which can concentrate the load on fewer coils and increase the local stress. If the grinding is excessive—if the end coils are ground too thin—the end coils may yield preferentially, and the spring may lose its squareness or its load-bearing capability. The specification of the ground end thickness (for example, not less than one-eighth of the wire diameter) is a recognition that the end coil must retain enough material to carry its share of the solid height load.

<div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #00a0b0; margin-top: 30px;">
  <h4 style="margin-top: 0;">Need to verify spring performance against ASTM, ISO or AMS standards?</h4>
  <p style="margin-bottom: 15px;">The standards and test methods discussed above require reliable force-displacement and fatigue data. Our <strong>Spring Tension & Compression Testers</strong> are designed for accurate, traceable measurement in accordance with ISO 7500-1 and ASTM E4.</p>
  <a href="/spring-testing/" style="display: inline-block; padding: 10px 20px; background: #1e3c72; color: white; text-decoration: none; border-radius: 5px;">View Testing Equipment</a>
</div>

