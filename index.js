document.addEventListener("alpine:init", () => {
  Alpine.data("CAPSTONEWIDGET", () => {
    return {
      title: "MAXIMUM UNSUPPORTED SPAN API",
      homepage: true,
      UCS_Virgin_Stress_Ratio: false,
      Jn_Description: false,
      Jr_Description: false,
      Ja_Description: false,
      Jw_Description: false,
      Rock_Quality_Designator: false,
      Rock_Quality_Index_Q_Value: false,
      Stress_Reduction_Ratio: false,
      Rock_Mass_Rating: false,
      Excavation_Category: false,
      Maximum_Unsupported_Span: false,
      contact_us:false,
      history:false,

      openHome(currentSection) {
        this.homepage = true;
        if (currentSection == "UCS_Virgin_Stress_Ratio") {
          this.UCS_Virgin_Stress_Ratio = true;
          this.homepage = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Jn_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description = true;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Ja_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description = false;
          this.Jr_Description = true;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Jr_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description = false;
          this.Jr_Description = true;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Jw_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = true;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Rock_Quality_Designator") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=true;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Rock_Quality_Index_Q_Value") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=true;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Stress_Reduction_Ratio") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=true;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Rock_Mass_Rating") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=true;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Excavation_Category") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=true;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=false;
        } else if (currentSection == "Maximum_Unsupported_Span") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=true;
          this.contact_us=false;
          this.history=false;
        }else if (currentSection == "contact_us") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=true;
          this.history=false;
        }else if (currentSection == "history") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.Jn_Description= false;
          this.Jr_Description=false;
          this.Ja_Description=false;
          this.Jw_Description=false;
          this.Rock_Quality_Designator=false;
          this.Rock_Quality_Index_Q_Value=false;
          this.Stress_Reduction_Ratio=false;
          this.Rock_Mass_Rating=false;
          this.Excavation_Category=false;
          this.Maximum_Unsupported_Span=false;
          this.contact_us=false;
          this.history=true;
        }
      },

      UCSVirginStressRatio() {},

      JnDescription() {},

      JaDescription() {},
      JrDescription() {},

      JwDescription() {},

      RQD() {},

      Q() {},

      SRF() {},

      RMR() {},

      ESR() {},

      MUS() {},
    };
  });
});
